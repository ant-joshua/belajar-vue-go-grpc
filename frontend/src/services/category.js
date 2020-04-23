import { Category } from '../../proto/category_pb'
import { CategoryServicePromiseClient } from '../../proto/category_grpc_web_pb'
// eslint-disable-next-line camelcase
// var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
export default class {
  constructor () {
    this.category = new Category()

    this.client = new CategoryServicePromiseClient('http://localhost:9000', null, null)
    // this.tokenKey = deps.tokenKey'
    // this.proto = deps.proto
    // this.client = new deps.proto.CategoryClient(process.env.API_URL, null, null)
  }

  async create (category) {
    const req = this.category
    req.setId(category.id.trim().toLowerCase())
    req.setName(category.name.trim())
    // req.setEmail(category.email.trim().toLowerCase())
    // req.setPassword(cat.password.trim())
    const res = await this.client.create(req, {})
    return res
  }

  async getAll () {
    // const req = this.category
    const res = await this.client.getAll()
    return res
  }
}
