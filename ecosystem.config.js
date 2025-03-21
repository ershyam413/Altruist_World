module.exports = {
  apps: [
    {
      name: "altruist-world",
      script: "npm",
      // script: "/home/glow/server.js",
      args: "start",
      watch: false,
      error_file:
        "/home/altruist-world_production/log/pm2/altruist-world_app_error.log",
      out_file:
        "/home/altruist-world_production/log/pm2/altruist-world_app_error.log",
      instances: 1,
      exec_mode: "cluster",
      time: true,
      log_date_format: "YYYY-MM-DD HH:mm Z",
      max_memory_restart: "1024M",
    },
  ],
};
