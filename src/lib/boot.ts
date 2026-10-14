// Sets the theme before first paint; keep it dependency-free and in sync with theme.ts.
export const bootScript = `(function(){try{var d=document.documentElement;var t=null;try{t=localStorage.getItem("theme")}catch(e){}if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}d.dataset.theme=t}catch(e){}})();`;
