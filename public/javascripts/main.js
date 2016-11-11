'use strict';

function conon(url) {
    var username = 'sumsing';
    return username;
}

var arrayuser = ['https://vk.com/igovorukhin', 'http://vk.com/igovorukhin', 'https://vk.com/igovorukhin?z=video99573928_456239053%2F5ed7e2e7ad32620718%2Fpl_wall_99573928'];

arrayuser.forEach(function (url) {
    var username = conon(url);
    console.log(username);
});