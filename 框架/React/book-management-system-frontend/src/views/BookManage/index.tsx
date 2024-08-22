import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Button, Card, Form, Input, message } from 'antd'
import { list, deleteBook, _to } from '@/utils/request'
import './index.css'
import CreateBookModal from './CreateBookModal'
import type { CreateBookModalProps } from './CreateBookModal'

interface Book {
  id: number
  name: string
  author: string
  description: string
  cover: string
}

interface BookParams {
  name: string
}

// 提取现有组件的 props 类型
const BookModal = memo((props: React.ComponentProps<typeof CreateBookModal>) => (
  <CreateBookModal {...props} />
))

const origin = window.location.origin

function BookManage() {
  const [bookList, setBookList] = useState<Array<Book>>([])
  const [bookParams, setBookParams] = useState<BookParams>()

  const [isCreateBookModalOpen, setCraeteBookModalOpen] = useState(false)

  const bookInfo = useRef<CreateBookModalProps['bookInfo']>({})
  const modalTitle = useRef('')
  const formDisabled = useRef(false)

  const queryBookList = async () => {
    let result = []
    try {
      const res = await list(bookParams)
      if (res.status === 201 || res.status === 200) {
        result = res.data
      }
    } catch (e: any) {
      message.error(e.response.data.message)
    } finally {
      return result
    }
  }

  const searchBook = (values: BookParams) => {
    setBookParams(values)
  }

  const addBook = () => {
    modalTitle.current = '新增图书'
    formDisabled.current = false
    bookInfo.current = {}
    setCraeteBookModalOpen(true)
  }

  const details = (book: Book) => {
    modalTitle.current = '查看图书'
    formDisabled.current = true
    bookInfo.current = { ...book }
    setCraeteBookModalOpen(true)
  }

  const edit = (book: Book) => {
    modalTitle.current = '编辑图书'
    formDisabled.current = false
    bookInfo.current = { ...book }
    setCraeteBookModalOpen(true)
  }

  const delBook = async (book: Book) => {
    if (!book.id) {
      return
    }

    const [err, res] = await _to(deleteBook({ id: book.id }))
    if (err) {
      return
    }

    if (res.status === 201 || res.status === 200) {
      message.success('删除成功')
      queryBookList().then(setBookList)
    }
  }

  const modalHandleClose = useCallback((isRefresh?: boolean) => {
    setCraeteBookModalOpen(false)
    if (isRefresh) {
      queryBookList().then(setBookList)
    }
  }, [])

  useEffect(() => {
    queryBookList().then(setBookList)
  }, [bookParams])

  console.log('父组件渲染')

  return (
    <>
      <div className="bookManage">
        <h1>图书管理系统</h1>
        <div className="content">
          <div className="book-search">
            <Form onFinish={searchBook} name="search" layout="inline" colon={false}>
              <Form.Item label="图书名称" name="name">
                <Input />
              </Form.Item>
              <Form.Item label=" ">
                <Button type="primary" htmlType="submit">
                  搜索图书
                </Button>
                <Button type="primary" style={{ background: 'green' }} onClick={addBook}>
                  添加图书
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="book-list">
            {bookList.map((book) => {
              return (
                <Card
                  className="card"
                  hoverable
                  style={{ width: 300 }}
                  key={book.id}
                  cover={<img alt="example" src={`${origin}/uploads/${book.cover}`} />}
                >
                  <h2>{book.name}</h2>
                  <div>{book.author}</div>
                  <div className="links">
                    <a href="#" onClick={() => details(book)}>
                      详情
                    </a>
                    <a href="#" onClick={() => edit(book)}>
                      编辑
                    </a>
                    <a href="#" onClick={() => delBook(book)}>
                      删除
                    </a>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      <BookModal
        isOpen={isCreateBookModalOpen}
        bookInfo={bookInfo.current}
        modalTitle={modalTitle.current}
        formDisabled={formDisabled.current}
        handleClose={modalHandleClose}
      />
    </>
  )
}

export default BookManage
