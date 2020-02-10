const express = require('express')
const router = require('express').Router()
const YAML = require('yamljs')
const fs = require('fs')
const app = express();

router.get('/:server/:env', (req, res) => {
    const {server, env} = req.params;
    const serviceConfigPath = `./configs/${server}/${server}-${env}.yml`
    const commonConfigPath = `./configs/common-${env}.yml`
    if(fs.existsSync(serviceConfigPath)) {
        const yamlConfig = YAML.load(serviceConfigPath)
        const commonConfig = YAML.load(commonConfigPath)
        return res.status(200).json({service: yamlConfig, common: commonConfig})
    }
    res.status(500).json({error: "Service config not availabe"})
})

app.use(router)

app.listen(8080, () => console.log('server started at ::5000'))