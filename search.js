// input 박스에 검색 기능 만들어야 함

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buttons button');
    const recentButton = document.querySelector('.recent');
  
    recentButton.classList.add('active');
    showAllSections();
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const sectionId = button.getAttribute('data-section');
        showSection(sectionId);
      });
    });
  
    document.querySelector('.recent').addEventListener('click', function() {
        showAllSections();
    });
        
    document.querySelector('.hotel').addEventListener('click', function() {
        hideAllSections();
        showSection('ho');
    });
        
    document.querySelector('.shop').addEventListener('click', function() {
        hideAllSections();
        showSection('sh');
    });
        
    document.querySelector('.street').addEventListener('click', function() {
        hideAllSections();
        showSection('st');
    });

    function hideAllSections() {
      const sections = document.querySelectorAll('.sh, .ho, .st');
      sections.forEach(function(section) {
        section.style.display = 'none';
      });
    }
  
    function showSection(sectionId) {
      const section = document.querySelector('.' + sectionId);
      section.style.display = 'block';
    }
  
    function showAllSections() {
      const sections = document.querySelectorAll('.sh, .ho, .st');
      sections.forEach(function(section) {
        section.style.display = 'block';
      });
    }
  });