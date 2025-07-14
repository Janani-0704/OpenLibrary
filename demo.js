  const sections = {
    'displayBooks_all': 'b1',
    'displayBooks_trending': 'b2',
    'displayBooks_classic': 'b3',
    'displayBooks_book': 'b4',
    'displayBooks_romance': 'b6',
    'displayBooks_thriller': 'b5',
    'displayBooks_textbooks': 'b7'
  };

  document.querySelectorAll('.category li').forEach(item => {
    item.addEventListener('click', () => {
      const className = item.className.trim();
      const showSection = sections[className];

      Object.values(sections).forEach(sec => {
        document.querySelector(`.${sec}`).style.display = 'none';
      });

      if (showSection) {
        document.querySelector(`.${showSection}`).style.display = 'grid';
      }
    });
  });

  window.onload = () => {
    Object.values(sections).forEach(sec => {
      document.querySelector(`.${sec}`).style.display = 'none';
    });
    document.querySelector('.b1').style.display = 'grid';
  };
