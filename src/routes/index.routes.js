import{Router} from 'express';
const router = Router();

router.get('/info',(req,res, next)=>{
    res.json({
        status: true,
        message:'API  funcionamiento correctamente',
         version:'1.0.0'
    })
});

export default  router;
