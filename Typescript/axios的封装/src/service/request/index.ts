import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { BASE_URL, TIME_OUT } from '../config'

class HYRequest {
	instance: AxiosInstance
	constructor() {
		this.instance = axios.create({
			baseURL: BASE_URL,
			timeout: TIME_OUT,
			headers: {},
		})
	}

	request(config: AxiosRequestConfig) {
		return this.instance.request(config)
	}

	get() {}

	post() {}
}

export default HYRequest
