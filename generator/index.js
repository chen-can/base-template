module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
    },
    dependencies: {
    },
    devDependencies: {
    }
  });
  // 删除 vue-cli3 默认目录
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path])
    console.log(Object.keys(files))
  })
  // 复制template模版
  api.render('../template');
  api.onCreateComplete(() => {
    process.env.VUE_CLI_SKIP_WRITE = true;
  });
};

