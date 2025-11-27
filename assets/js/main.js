// Theme toggle + simple behaviors
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('theme-toggle');
  btn && btn.addEventListener('click', function(){
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
      document.body.classList.remove('light');
      localStorage.setItem('theme','dark');
      btn.textContent = '☀️';
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('theme','light');
      btn.textContent = '🌙';
    }
  });

  // restore theme
  const t = localStorage.getItem('theme');
  if(t === 'dark'){ document.body.classList.add('dark'); document.body.classList.remove('light'); if(btn) btn.textContent='☀️'; }
  else { document.body.classList.add('light'); if(btn) btn.textContent='🌙'; }
});
