document.addEventListener('DOMContentLoaded', function () {
    loadNotes();
});

function saveNote() {
    let noteContent = document.getElementById('noteTextarea').value;
    let fileInput = document.getElementById('fileInput');
    let selectedFile = fileInput.files[0];
    let isImportant = document.getElementById('importantNote').checked;

    if (noteContent.trim() !== '' || selectedFile) {
        let notes = getNotes();
        let noteObject = {
            content: noteContent,
            fileName: selectedFile ? selectedFile.name : null,
            fileData: selectedFile ? URL.createObjectURL(selectedFile) : null,
            important: isImportant
        };

        notes.push(noteObject);

        saveNotes(notes);
        clearNoteTextarea();
        clearFileInput();
        loadNotes();
    } else {
        alert('Нотатка порожня. Будь ласка, введіть текст або виберіть файл.');
    }
}

function getNotes() {
    let savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
}

function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
    let notes = getNotes();
    let notesList = document.getElementById('notesList');
    notesList.innerHTML = '';

    for (let i = 0; i < notes.length; i++) {
        let li = document.createElement('li');
        li.textContent = notes[i].content;

        if (notes[i].fileName) {
            let fileLink = document.createElement('a');
            fileLink.href = notes[i].fileData;
            fileLink.target = '_blank';
            fileLink.textContent = 'Відкрити файл: ' + notes[i].fileName;
            li.appendChild(document.createElement('br'));
            li.appendChild(fileLink);
        }

        if (notes[i].important) {
            li.innerHTML += ' <strong>[Важлива]</strong>';
        }

        let buttonsDiv = document.createElement('div');
        buttonsDiv.innerHTML = '<button onclick="editNote(' + i + ')">Редагувати</button>';
        buttonsDiv.innerHTML += '<button onclick="deleteNote(' + i + ')">Видалити</button>';

        li.appendChild(buttonsDiv);
        notesList.appendChild(li);
    }
}

function editNote(index) {
    let notes = getNotes();
    let editedNoteContent = prompt('Редагувати нотатку:', notes[index].content);

    if (editedNoteContent !== null) {
        notes[index].content = editedNoteContent;
        saveNotes(notes);
        loadNotes();
    }
}

function deleteNote(index) {
    let notes = getNotes();
    let confirmation = confirm('Ви впевнені, що хочете видалити цю нотатку?');

    if (confirmation) {
        notes.splice(index, 1);
        saveNotes(notes);
        loadNotes();
    }
}

function clearNoteTextarea() {
    document.getElementById('noteTextarea').value = '';
}

function clearFileInput() {
    document.getElementById('fileInput').value = '';
}