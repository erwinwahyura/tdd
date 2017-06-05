const chai = require('chai')
const chaiHtpp = require('chai-http')
chai.use(chaiHtpp)
var should = chai.should()
var article = require('../models/article')
var server = require('../app')
var article = require('../models/article')

describe('Articles', function() {
  beforeEach(function(done) {
    var createArticle = new article({
      "title" : "tes",
      "body" : "tes2",
      "createdby" : "erwinwahyura"
    })

    createArticle.save(() => {
      done()
    })
  })

  afterEach(function(done) {
    article.remove({}, function(err) {
      done()
    })
  })

  describe('GET, /article', function() {
    it('it should get all articles ', function(done) {
      chai.request(server)
      .get('/api/articles')
      .end(function(err, res) {
        console.log('-----------------',res.body);
        res.should.have.status(200)
     	// 	res.body.should.be.a('array') //cek tipe data
     		res.body.length.should.equal(0)

        done()
      })
    })
  })
})



describe('POST, /article', function() {
  it('it should create new an articles ', function(done) {
    chai.request(server)
    .post('/api/articles')
    .end(function(err, res) {
      console.log('-----------------',res.body);
      res.should.have.status(200)
   	// 	res.body.should.be.a('array') //cek tipe data
   		res.body.length.should.equal(0)

      done()
    })
  })
})
