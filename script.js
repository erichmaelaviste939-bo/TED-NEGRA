const storyDiv = document.getElementById('story');
    const editBtn = document.getElementById('editBtn');

    let isEditing = false;

    editBtn.addEventListener('click', () => {
      if (!isEditing) {
        storyDiv.contentEditable = "true";
        storyDiv.focus();
        editBtn.textContent = "Save Story";
      } else {
        storyDiv.contentEditable = "false";
        editBtn.textContent = "Edit Story";
      }
      isEditing = !isEditing;
    });
