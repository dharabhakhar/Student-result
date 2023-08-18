var express = require('express');
const { add_mark, view_mark, single_student, update_student, delete_student, min_student, max_student, pass_student, fail_student, atkt_student, search_student } = require('../controller/controller_index');
var router = express.Router();
var cors = require('cors')
router.use(cors())

/* GET home page. */
router.post('/', add_mark);
router.get('/view', view_mark);
router.get('/single/:id', single_student);
router.post('/:id', update_student);
router.delete('/delete/:id', delete_student);
router.get('/min_mark', min_student);
router.get('/max_mark', max_student);
router.get('/pass', pass_student);
router.get('/fail', fail_student);
router.get('/atkt', atkt_student);
router.get('/search/:key', search_student);

module.exports = router;
