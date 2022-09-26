// router.queryをuseEffectで取ってこれるようにするための処方箋
// https://zenn.dev/sora_kumo/articles/e86bbf0291d4a7

import App from 'next/app'
App.getInitialProps = async () => ({ pageProps: {} })
export default App