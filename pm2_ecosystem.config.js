module.exports = {
  apps: [
    {
      name: 'qoder-proxy',

      // 项目根目录，保证 .env、usage.json、相对路径都在这里
      cwd: '/home/openclaw/wtf_workspace/github/qoder-proxy',

      // 直接启动真实入口，比 npm start 少一层包装
      script: 'clean/server.js',

      // 这个项目建议单进程，不要 cluster
      exec_mode: 'fork',
      instances: 1,

      // 自动重启策略
      autorestart: true,
      restart_delay: 3000,
      max_restarts: 10,
      min_uptime: '10s',

      // 内存保护，按需调大
      max_memory_restart: '512M',

      // 日志
      time: true,
      merge_logs: true,
      out_file: '/home/openclaw/.pm2/logs/qoder-proxy-out.log',
      error_file: '/home/openclaw/.pm2/logs/qoder-proxy-error.log',

      // 环境变量：核心配置仍然放 .env，这里只放通用项
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
