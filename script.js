const tagContainer = document.querySelector('.tag-container');
const input = document.querySelector('.tag-container input');
const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

let tags = [];

function createTag(label) {
  const div = document.createElement('div');
  div.setAttribute('class', 'tag');
  const span = document.createElement('span');
  span.innerHTML = label;
  const closeIcon = document.createElement('i');
  closeIcon.innerHTML = `&#215;`;
  closeIcon.setAttribute('class', 'material-icons');
  closeIcon.setAttribute('data-item', label);
  div.appendChild(span);
  div.appendChild(closeIcon);
  return div;
}

function clearTags() {
  document.querySelectorAll('.tag').forEach(tag => {
    tag.parentElement.removeChild(tag);
  });
}

function addTags() {
  clearTags();
  tags.slice().reverse().forEach(tag => {
    tagContainer.prepend(createTag(tag));
  });
}

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      e.target.value.split(',').forEach(tag => {
        tags.push(tag);  
      });
      
      addTags();
      input.value = '';
    }
});
document.addEventListener('click', (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === 'I') {
    const tagLabel = e.target.getAttribute('data-item');
    const index = tags.indexOf(tagLabel);
    tags = [...tags.slice(0, index), ...tags.slice(index+1)];
    addTags();    
  }
})

input.focus();

 

// search.addEventListener('input', () => searchSkills(search.value));

const skills = [
    {name: 'Java'},
    {name: 'JavaScript'},
    {name: 'Python'},
    {name: 'Web Development'},
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'Figma'},
    {name: 'Bootstrap'}
  ];
  

  const searchInput = document.querySelector('.search-input');
  const suggestionsPanel = document.querySelector('.suggestions');
  
  searchInput.addEventListener('keyup', function() {
    const input = searchInput.value;
    suggestionsPanel.innerHTML = '';
    const suggestions = skills.filter(function(skill) {
      return skill.name.toLowerCase().startsWith(input);
    });
    suggestions.forEach(function(suggested) {
      const div = document.createElement('option');
      div.innerHTML = suggested.name;
      console.log(div.innerHTML);
      suggestionsPanel.appendChild(div);
    });
    if (input === '') {
      suggestionsPanel.innerHTML = '';  
    }

    
  });

searchInput.addEventListener('input', () => push(div.innerHTML));