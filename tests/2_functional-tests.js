// #1
test('Test GET /hello with no name', function (done) {
  chai.request(server).keepOpen().get('/hello')
    .end(function (err, res) {
      assert.equal(res.status, 200);
      assert.equal(res.text, 'hello Guest');
      done();
    });
});

// #2
test('Test GET /hello with your name', function (done) {
  chai.request(server).keepOpen().get('/hello?name=xy_z')
    .end(function (err, res) {
      assert.equal(res.status, 200);
      assert.equal(res.text, 'hello xy_z');
      done();
    });
});
    });
// #3
test('Send {surname: "Colombo"}', function (done) {
  chai.request(server).keepOpen()
    .put('/travellers')
    .send({ surname: 'Colombo' })
    .end(function (err, res) {
      assert.equal(res.status, 200);
      assert.equal(res.type, 'application/json');
      assert.equal(res.body.name, 'Cristoforo');
      assert.equal(res.body.surname, 'Colombo');
      done();
    });
});

// #4
test('Send {surname: "da Verrazzano"}', function (done) {
  chai.request(server).keepOpen()
    .put('/travellers')
    .send({ surname: 'da Verrazzano' })
    .end(function (err, res) {
      assert.equal(res.status, 200);
      assert.equal(res.type, 'application/json');
      assert.equal(res.body.name, 'Giovanni');
      assert.equal(res.body.surname, 'da Verrazzano');
      done();
    });
});

  suite('"Famous Italian Explorers" form', function () {
    // #5
    test('Submit the surname "Colombo" in the HTML form', function (done) {
      assert.fail();

      done();
    });
    // #6
    test('Submit the surname "Vespucci" in the HTML form', function (done) {
      assert.fail();// #5
test('Submit the surname "Colombo" in the HTML form', function (done) {
  browser.fill('surname', 'Colombo').then(function () {
    return browser.pressButton('submit');
  }).then(function () {
    assert.equal(browser.text('span#name'), 'Cristoforo');
    assert.equal(browser.text('span#surname'), 'Colombo');
    done();
  });
});

// #6
test('Submit the surname "Vespucci" in the HTML form', function (done) {
  browser.fill('surname', 'Vespucci').then(function () {
    return browser.pressButton('submit');
  }).then(function () {
    assert.equal(browser.text('span#name'), 'Amerigo');
    assert.equal(browser.text('span#surname'), 'Vespucci');
    done();
  });
});

      done();
    });
  });
});
