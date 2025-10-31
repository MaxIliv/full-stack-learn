let myleads = [];
const input = document.getElementById('input');
const saveBtn = document.getElementById('save');
const clear = document.getElementById('clear');
const tab = document.getElementById('tab');
const output = document.getElementById('output');
const LS_KEY = 'leads';

init();

function clearStore() {
  localStorage.clear();
  myleads = [];
  output.innerHTML = '';
}

function storeLeads() {
  const data = JSON.stringify(myleads);
  localStorage.setItem(LS_KEY, data);
}

function init() {
  myleads = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
  renderLeads(myleads);
}

function renderLeads(items) {
  items.forEach((link) => renderLead(link));
}

async function getCurrentTab() {
  if (!chrome.tabs) throw new Error('oops, no chrome.tabs.query');

  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

function onSave() {
  myleads.push(input.value);
  renderLead(input.value);
  storeLeads();
  input.value = '';
}

async function onSaveTab() {
  const tab = await getCurrentTab
  myleads.push(tab.url);
  renderLead();
  storeLeads();
}

function createListItem(link) {
  const a = document.createElement('a');
  a.href = link;
  a.textContent = link;
  a.target = '_blank';

  const li = document.createElement('li');
  li.appendChild(a);
  return li;
}

function renderLead(data) {
  const el = createListItem(data);
  output.appendChild(el);
}

saveBtn.addEventListener('click', onSave);
clear.addEventListener('click', clearStore);
tab.addEventListener('click', onSaveTab);
