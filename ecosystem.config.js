module.exports = {
  apps: [{
    name: 'qoder-proxy',
    cwd: '/home/openclaw/wtf_workspace/github/qoder-proxy',
    script: 'npm',
    args: 'start',
    env: {
      PORT: 3000,
      API_KEY: 'xxx'
    }
  }]
}
