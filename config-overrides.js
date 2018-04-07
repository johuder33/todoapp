const { injectBabelPlugin } = require('react-app-rewired');

/**
 * This small module will import any style needed by antd framework, on demand
 * need info? go to : https://ant.design/docs/react/use-with-create-react-app
 * @param {*} config 
 * @param {*} env 
 */
module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    return config;
};