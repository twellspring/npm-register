const fs = require('fs-extra')
const path = require('path')

process.env.NPM_REGISTER_FS_DIRECTORY = path.join(__dirname, '../tmp')

if (!fs.existsSync('./tmp/htpasswd')) {
  fs.outputFileSync('./tmp/htpasswd', 'test:$2y$05$ZhGKbrjyUbSbiMUeYeRUKOXPKzs9./NIZHsycrQkUKIj1Z2VybqdK\n')
}
