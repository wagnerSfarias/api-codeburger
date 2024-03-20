import Order from '../schemas/Order'

class ListOrderByUserController {
  async index(request, response) {
    const order = await Order.find({
      'user.id': request.userId,
    })

    return response.json(order)
  }
}
export default new ListOrderByUserController()
