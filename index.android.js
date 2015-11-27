'use strict';

var DBManager = require('react-native').NativeModules.DBManager

var Sqlite = {
	init: function(
		dbname: string,
		callback?: ?(error: ?Error, result: ?string) => void
	): Promise {
		return new Promise((resolve, reject) => {
			DBManager.init(dbname, function(errors, result) {
				callback && callback((errors && convertError(errors[0])) || null, result);
				if (errors) {
					reject(convertError(errors[0]));
				} else {
					resolve(result)
				}
			});
		});
	},

	query: function(
		sql: string,
		params: Array<?(number|string)>,		
		callback?: ?(error: ?Error, result: ?string) => void
	): Promise {
		return new Promise((resolve, reject) => {
			DBManager.query(sql, params, function(errors, result) {
				callback && callback((errors && convertError(errors[0])) || null, result);
				if (errors) {
					reject(convertError(errors[0]));
				} else {
					resolve(result)
				}				
			});
		});
	},

	exec: function(
		sql: string,
		params: Array<?(number|string)>,		
		callback?: ?(error: ?Error, result: ?string) => void
	): Promise {
		return new Promise((resolve, reject) => {
			DBManager.exec(sql, params, function(errors, result) {
				callback && callback((errors && convertError(errors[0])) || null, result);
				if (errors) {
					reject(convertError(errors[0]));
				} else {
					resolve(result)
				}				
			});
		});
	},

	close: function(
        callback?: ?(error: ?Error, result: ?string) => void
    ): Promise {
        return new Promise((resolve, reject) => {
            DBManager.close(function(errors, result) {
                callback && callback((errors && convertError(errors[0])) || null, result);
                if (errors) {
                    reject(convertError(errors[0]));
                } else {
                    resolve(result)
                }
            });
        });
    },
}

function convertError(error) {
  if (!error) {
    return null;
  }
  var out = new Error(error.message);
  out.key = error.key; // flow doesn't like this :(
  return out;
}

module.exports = Sqlite;