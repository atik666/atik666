import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins: PluginOption[] = [react()];
  
  // Only load componentTagger in development mode
  if (mode === 'development') {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { componentTagger } = require("lovable-tagger");
      plugins.push(componentTagger());
    } catch (e) {
      // lovable-tagger not available, skip it
    }
  }

  return {
    base: "/faculty-web-weaver/",
    build: {
      outDir: "docs", // Change output directory to docs
    },
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});