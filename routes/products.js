const router = require('express').Router()
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const ProductController = require('../controllers/productController')

router.use(authentication)
router.post('/', authorization, ProductController.createProduct)
// router.get('/', ProductController.getAllProduct)
router.put('/:id', authorization, ProductController.updateProduct)
router.delete('/:id', authorization, ProductController.deleteProduct)

module.exports = router