import {Router} from 'express';
import asyncHander from 'express-async-handler';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
import { OrderStatus } from '../constants/order_status';
import { OrderModel } from '../models/order.model';
import auth from '../middlewares/auth.mid';
import { UserModel } from '../models/user.model';

const router = Router();
router.use(auth);

router.post('/create',
asyncHander(async (req:any, res:any) => {
    const requestOrder = req.body;

    if(requestOrder.items.length <= 0){
        res.status(HTTP_BAD_REQUEST).send('Cart Is Empty!');
        return;
    }

    // await OrderModel.deleteOne({
    //     user: req.user.id,
    //     status: OrderStatus.NEW
    // });

    // const newOrder = new OrderModel({...requestOrder,user: req.user.id});
    // await newOrder.save();
    // res.send(newOrder);

    const order = await OrderModel.create({...requestOrder,user: req.user.id});
    res.send(order);
    
})
)

router.get('/newOrderForCurrentUser', asyncHander(
    async (req:any , res) => {
        const order = await OrderModel.findOne({
            user: req.user.id,
            status: OrderStatus.NEW
        });
        if(order) res.send(order);
        else res.status(HTTP_BAD_REQUEST).send();
    }
))

router.get('/ordersByUser' , asyncHander(
    async (req:any ,res) => {
        const userId = req.user.id;
        const user = await UserModel.findById(userId);
        if(!user){
            res.status(HTTP_BAD_REQUEST).send('User not found');
            return;
        }
        const orders = await OrderModel.find({user: user})

        if(!orders){
            res.status(HTTP_BAD_REQUEST).send(`${req.user.name} has no orders yet!`);
            return;
        }
        orders.reverse();
        res.send(orders)
    }

));

router.get('/track/:id', asyncHander(
    async (req, res) => {
        const order = await OrderModel.findById(req.params.id);
        res.send(order)
    }
))

export default router;