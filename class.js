document.addEventListener("DOMContentLoaded", () => {
  // Dynamically load Font Awesome
  const fontAwesomeScript = document.createElement("script");
  fontAwesomeScript.src = "https://kit.fontawesome.com/de6be6a572.js";
  fontAwesomeScript.crossOrigin = "anonymous";
  document.head.appendChild(fontAwesomeScript);

  // Other JS functionality
  // Toggle group details
  const groupToggles = document.querySelectorAll(".group__info__click");

  groupToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const parentGroup = toggle.closest(".group");
      const expandedGroup = parentGroup.nextElementSibling;
      if (expandedGroup && expandedGroup.classList.contains("group__full__box")) {
        expandedGroup.classList.toggle("group__clicked");
      }
    });
  });

  // Notification badge toggle
  const notificationBell = document.querySelector(".notification");
  const notificationBadge = document.querySelector(".notification__badge");

  notificationBell.addEventListener("click", () => {
    if (notificationBadge) {
      notificationBadge.style.display = "none"; // Hide the badge
    }
    alert("No new notifications!"); // Custom alert
  });

  // Search bar interaction
  const searchInput = document.querySelector("#search");
  searchInput.addEventListener("input", (event) => {
    console.log(`Search query: ${event.target.value}`);
  });

  // Chat reply and delete actions
  const replyButtons = document.querySelectorAll(".reply");
  const removeButtons = document.querySelectorAll(".remove__chat");

  replyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Reply functionality is not implemented yet!");
    });
  });

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const chat = button.closest(".single__chat");
      chat.remove(); // Remove the chat
    });
  });

  // Create new group functionality
  const createGroupButton = document.querySelector(".create__new__group");
  createGroupButton.addEventListener("click", () => {
    alert("Create New Group functionality is not implemented yet!");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const createGroupButton = document.querySelector(".create__new__group");
  const groupContainer = document.querySelector(".new__group");

  createGroupButton.addEventListener("click", () => {
    // Create a new group element
    const newGroup = document.createElement("div");
    newGroup.className = "group";

    // Add the group image
    const groupImage = document.createElement("div");
    groupImage.className = "group__image";
    const img = document.createElement("img");
    img.src = "https://cdn2.vectorstock.com/i/1000x1000/77/36/artificial-intelligence-ai-icon-vector-23097736.jpg";
    img.alt = "Group Icon";
    groupImage.appendChild(img);

    // Add group info
    const groupInfoClick = document.createElement("div");
    groupInfoClick.className = "group__info__click";

    const groupInfo = document.createElement("div");
    groupInfo.className = "group__info";
    const groupName = document.createElement("h3");
    groupName.textContent = "New Group";
    groupName.className = "editable-name";

    // Enable editing on group name click
    groupName.addEventListener("click", () => {
      const input = document.createElement("input");
      input.type = "text";
      input.className = "edit-group-name";
      input.value = groupName.textContent;

      // Replace group name with input field
      groupInfo.replaceChild(input, groupName);

      // Save new name on "Enter" or when input loses focus
      const saveName = () => {
        groupName.textContent = input.value.trim() || "New Group"; // Default if empty
        groupInfo.replaceChild(groupName, input);
      };

      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") saveName();
      });

      input.addEventListener("blur", saveName);

      // Focus input for immediate editing
      input.focus();
    });

    const groupStudentCount = document.createElement("p");
    groupStudentCount.className = "group__student__count";
    groupStudentCount.textContent = "No of Students: 0";

    groupInfo.appendChild(groupName);
    groupInfo.appendChild(groupStudentCount);
    groupInfoClick.appendChild(groupInfo);

    // Add dropdown arrow
    const dropdownArrow = document.createElement("i");
    dropdownArrow.className = "fa-solid fa-angle-down group__right__arrow";
    groupInfoClick.appendChild(dropdownArrow);

    // Assemble the group
    newGroup.appendChild(groupImage);
    newGroup.appendChild(groupInfoClick);

    // Add the new group to the container
    groupContainer.insertAdjacentElement("beforebegin", newGroup);

    alert("New group created successfully!");
  });
});

function toggleClassification() {
  const classification = document.getElementById("classification");
  if (classification.style.display === "none") {
    classification.style.display = "inline";
  } else {
    classification.style.display = "none";
  }
}

function toggleMenu(action) {
  const menu = document.getElementById("menu");
  const arrowDown = document.querySelector(".fa-angle-down");
  const arrowUp = document.querySelector(".fa-angle-up");

  if (action === "down") {
    menu.style.display = "block";
    arrowDown.style.display = "none";
    arrowUp.style.display = "inline";
  } else if (action === "up") {
    menu.style.display = "none";
    arrowDown.style.display = "inline";
    arrowUp.style.display = "none";
  }
}

