module.exports = {
    apps: [
        {
            "name": "agency-pro",
            "script": ".output/server/index.mjs",
            "node_args": ["--experimental-modules"],
            "env": {
                "NODE_ENV": "production"
            }
        }
    ]
};