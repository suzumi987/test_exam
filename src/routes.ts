import { Router, Request, Response } from 'express'
import exam1 from './ctr/exam1/exam1.ctr'
import exam2 from './ctr/exam2/exam2.ctr'

const router = Router();

router.post('/exam1', (req: Request, res: Response) => {
    const { nums, target } = req.body
    const ans = exam1(nums, target)
    res.json(ans)
})

router.post('/exam2', (req: Request, res: Response) => {
    const { value, pay } = req.body
    const ans = exam2(value, pay)
    res.json(ans)
})


export default router;