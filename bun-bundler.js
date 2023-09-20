const output = Bun.build({
    entrypoints: ['./public/main.mjs'],
    outdir: './public/build',
    minify: true,
    // additional config
});

output.then(a => {
    console.log(a);
})