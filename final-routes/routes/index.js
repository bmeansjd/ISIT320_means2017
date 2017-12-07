var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'final-routes' });
});

/*In routes/index.js implement three routes:
    One that returns { "result" : "route01"}
One that returns { "result" : "route02"}
One that returns { "result" : "route03"}*/


router.get('/result', function(request, response) { 'use strict' })

;

router.get('/', function(req, res, next) { 'use strict';
    res.render('result', { title: 'route01' });
});


router.get('/', function(req, res, next) { 'use strict';
    res.render('result', { title: 'route02' });
});


router.get('/', function(req, res, next) { 'use strict';
    res.render('result', { title: 'route03' });
});



router.get('/', function(req, res, next) { 'use strict';
    res.render('result', { title: 'route03' });
});




    return router;
};








module.exports = router;
