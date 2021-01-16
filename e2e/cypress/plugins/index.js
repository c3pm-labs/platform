const formData = require('form-data');
const fs = require('fs');
const axios = require('axios');

module.exports = (on) => {
    on('task', {
        publishPackage({ version, url, apiKey, name }) {
            const lib = fs.createReadStream(`${__dirname}/../fixtures/data/package.tar`);
            const form = new formData();
            form.append('package', lib, {filename: version});

            return axios.post(url, form, {
                headers: {
                    ...form.getHeaders(),
                    name,
                    version,
                    authorization: apiKey,
                },
            })
        }}
    )
}
