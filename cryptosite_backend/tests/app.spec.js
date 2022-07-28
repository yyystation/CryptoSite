request = require('supertest')
app = require('../app');

describe('devices test', function() {	
	it('/device api test',function(done) {
		request(app)
    .get('/crypto')
    .expect(200) //断言希望得到返回http状态码
    .end(function(err, res) {
        console.info(err);
        done();
    });
	});
});