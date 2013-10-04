'use strict';

describe('Service: getList', function () {

  // load the service's module
  beforeEach(module('chattyApp'));

  // instantiate service
  var getList;
  beforeEach(inject(function (_getList_) {
    getList = _getList_;
  }));

  it('should do something', function () {
    expect(!!getList).toBe(true);
  });

});
