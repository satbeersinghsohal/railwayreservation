import 'whatwg-fetch';
import rp from 'request-promise';

class HttpSevice {
    register = (useremail, userpassword) => {
        var promise = new Promise((resolve, reject) => {
            console.log(useremail+' ' +userpassword)
            var options = {
                    method: 'POST',
                    uri: 'http://localhost:3004/passenger',
                    body: {
                    email: useremail,
                    password: userpassword
                },
                    json: true // Automatically stringifies the body to JSON
                };
            rp(options)
                .then(function (parsedBody) {
                   resolve(parsedBody);
            })
                .catch(function (err) {
                // POST failed...
            });
        });
        return promise;
    }
    getproducts = (useremail, userpassword) => {
        var promise = new Promise((resolve, reject) => {
            console.log(useremail+' ' +userpassword)
            var options = {
                    method: 'POST',
                    uri: 'http://localhost:3004/passenger/login',
                    body: {
                    email: useremail,
                    password: userpassword
                },
                    json: true // Automatically stringifies the body to JSON
                };
            rp(options)
                .then(function (parsedBody) {
                   resolve(parsedBody);
            })
                .catch(function (err) {
                // POST failed...
            });
        });
        return promise;
    }
    adminlogin = (useremail, userpassword) => {
        var promise = new Promise((resolve, reject) => {
            console.log(useremail+' ' +userpassword)
            var options = {
                    method: 'POST',
                    uri: 'http://localhost:3004/admin',
                    body: {
                    email: useremail,
                    password: userpassword
                },
                    json: true // Automatically stringifies the body to JSON
                };
            rp(options)
                .then(function (parsedBody) {
                   resolve(parsedBody);
            })
                .catch(function (err) {
                // POST failed...
            });
        });
        return promise;
    }
    bookticket = (useremail,pname, pfrom, pto ,pbalance, title) => {
        var promise = new Promise((resolve, reject) => {
            console.log(useremail+' '+pname+' ' +pfrom+' '+pto+' balance'+ pbalance);
            var options = {
                    method: 'POST',
                    uri: 'http://localhost:3004/ticket',
                    body: {
                    email: useremail,
                    passengername: pname,
                    from: pfrom,
                    to: pto,
                    balance: pbalance,
                    title:title
                },
                    json: true // Automatically stringifies the body to JSON
                };
            rp(options)
                .then(function (parsedBody) {
                   resolve(parsedBody);
            })
                .catch(function (err) {
                // POST failed...
            });
        });
        return promise;
    }
    addtrain = (useremail,trains) => {
        console.log("trains",trains)
        var promise = new Promise((resolve, reject) => {
            var options = {
                    method: 'POST',
                    uri: 'http://localhost:3004/addtrain',
                    body: {
                    email: useremail,
                    trains: trains
                },
                    json: true // Automatically stringifies the body to JSON
                };
            rp(options)
                .then(function (parsedBody) {
                   resolve(parsedBody);
            })
                .catch(function (err) {
                // POST failed...
            });
        });
        return promise;
    }
}

export default HttpSevice;