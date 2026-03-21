// STEP 1 — The class map (this is the brain of Chai CSS)
const classMap = {
  // PADDING — controls space INSIDE an element
  "chai-p-1": { property: "padding", value: "4px" },
  "chai-p-2": { property: "padding", value: "8px" },
  "chai-p-3": { property: "padding", value: "12px" },
  "chai-p-4": { property: "padding", value: "16px" },
  "chai-p-6": { property: "padding", value: "24px" },
  "chai-p-8": { property: "padding", value: "32px" },

  // MARGIN — controls space OUTSIDE an element
  "chai-m-1": { property: "margin", value: "4px" },
  "chai-m-2": { property: "margin", value: "8px" },
  "chai-m-4": { property: "margin", value: "16px" },
  "chai-m-auto": { property: "margin", value: "auto" },
  "chai-m-top-2": { property: "marginTop", value: "8px" },
  "chai-m-top-3": { property: "marginTop", value: "12px" },

  // FONT SIZE
  "chai-text-xs": { property: "fontSize", value: "12px" },
  "chai-text-sm": { property: "fontSize", value: "14px" },
  "chai-text-base": { property: "fontSize", value: "16px" },
  "chai-text-lg": { property: "fontSize", value: "20px" },
  "chai-text-xl": { property: "fontSize", value: "24px" },
  "chai-text-2xl": { property: "fontSize", value: "32px" },
  "chai-text-3xl": { property: "fontSize", value: "48px" },

  // FONT WEIGHT
  "chai-font-bold": { property: "fontWeight", value: "700" },
  "chai-font-normal": { property: "fontWeight", value: "400" },
  "chai-font-black": { property: "fontWeight", value: "900" },

  // TEXT STYLE
  "chai-italic": { property: "fontStyle", value: "italic" },
  "chai-underline": { property: "textDecoration", value: "underline" },
  "chai-uppercase": { property: "textTransform", value: "uppercase" },
  "chai-letter-wide": { property: "letterSpacing", value: "2px" },
  "chai-text-center": { property: "textAlign", value: "center" },
  "chai-text-left": { property: "textAlign", value: "left" },
  "chai-text-right": { property: "textAlign", value: "right" },
  "chai-line-relaxed": { property: "lineHeight", value: "1.75" },

  // TEXT COLOR
  "chai-text-white": { property: "color", value: "#ffffff" },
  "chai-text-black": { property: "color", value: "#000000" },
  "chai-text-dark": { property: "color", value: "#1a1008" },
  "chai-text-gray": { property: "color", value: "#6b7280" },
  "chai-text-orange": { property: "color", value: "#f97316" },
  "chai-text-red": { property: "color", value: "#ef4444" },
  "chai-text-green": { property: "color", value: "#22c55e" },
  "chai-text-blue": { property: "color", value: "#3b82f6" },

  // BACKGROUND COLOR
  "chai-bg-orange": { property: "backgroundColor", value: "#f97316" },
  "chai-bg-dark": { property: "backgroundColor", value: "#1a1008" },
  "chai-bg-light": { property: "backgroundColor", value: "#fff7ed" },
  "chai-bg-white": { property: "backgroundColor", value: "#ffffff" },
  "chai-bg-blue": { property: "backgroundColor", value: "#3b82f6" },
  "chai-bg-green": { property: "backgroundColor", value: "#22c55e" },
  "chai-bg-red": { property: "backgroundColor", value: "#ef4444" },
  "chai-bg-gray": { property: "backgroundColor", value: "#f3f4f6" },

  // BORDER
  "chai-border": { property: "border", value: "1px solid #d1d5db" },
  "chai-border-2": { property: "border", value: "2px solid #d1d5db" },
  "chai-border-orange": {
    property: "border",
    value: "2px solid #f97316",
  },

  // BORDER RADIUS (rounded corners)
  "chai-rounded": { property: "borderRadius", value: "6px" },
  "chai-rounded-lg": { property: "borderRadius", value: "12px" },
  "chai-rounded-xl": { property: "borderRadius", value: "20px" },
  "chai-rounded-full": { property: "borderRadius", value: "9999px" },

  // SHADOW
  "chai-shadow": {
    property: "boxShadow",
    value: "0 1px 6px rgba(0,0,0,0.10)",
  },
  "chai-shadow-lg": {
    property: "boxShadow",
    value: "0 8px 32px rgba(249,115,22,0.18)",
  },

  // OPACITY
  "chai-opacity-50": { property: "opacity", value: "0.5" },
  "chai-opacity-75": { property: "opacity", value: "0.75" },

  // DISPLAY
  "chai-flex": { property: "display", value: "flex" },
  "chai-inline-block": { property: "display", value: "inline-block" },
  "chai-block": { property: "display", value: "block" },
  "chai-hidden": { property: "display", value: "none" },

  // FLEX HELPERS
  "chai-gap-2": { property: "gap", value: "8px" },
  "chai-gap-4": { property: "gap", value: "16px" },

  // WIDTH
  "chai-w-full": { property: "width", value: "100%" },
  "chai-w-half": { property: "width", value: "50%" },

  // CURSOR
  "chai-cursor-pointer": { property: "cursor", value: "pointer" },
};

// STEP 2 — The engine: finds all elements and applies matching classes
function applyChaiClasses() {
  // Select EVERY element on the page
  const allElements = document.querySelectorAll("*");

  // Loop through each element
  allElements.forEach(function (element) {
    // Loop through each class on that element
    element.classList.forEach(function (className) {
      // If this class is in our classMap, apply it!
      if (classMap[className]) {
        const styleProperty = classMap[className].property;
        const styleValue = classMap[className].value;

        // Apply as inline style (this is how Tailwind works too!)
        element.style[styleProperty] = styleValue;
      }
    });
  });
}

// STEP 3 — Run when the page loads
applyChaiClasses();
console.log("🍵 Chai CSS v1.0 loaded! All classes applied.");

const mutationObserver = new MutationObserver((mutations) => {
  console.log(mutations);
  applyChaiClasses();
  console.log("🍵 Re-applied Chai CSS");
});

mutationObserver.observe(document.body, {
  attributes: true,
  subtree: true,
  attributeFilter: ["class"],
});

// ── PLAYGROUND LOGIC ──
function applyPlayground() {
  const classInput = document.getElementById("pg-classes").value.trim();
  const textInput =
    document.getElementById("pg-text").value || "Hello World ☕";
  const preview = document.getElementById("pg-preview");
  const log = document.getElementById("pg-applied-log");

  // Reset the preview element completely
  preview.removeAttribute("style");
  preview.className = "";
  preview.textContent = textInput;

  // Split classes by spaces
  const classes = classInput.split(/\s+/).filter(Boolean);
  const applied = [];

  classes.forEach(function (cls) {
    preview.classList.add(cls);
    if (classMap[cls]) {
      const { property, value } = classMap[cls];
      preview.style[property] = value;
      applied.push(property + ": " + value);
    }
  });

  // Show what was applied
  if (applied.length > 0) {
    log.textContent = "✅ " + applied.join("  |  ");
    log.style.color = "#f97316";
  } else {
    log.textContent = "// no known chai- classes found";
    log.style.color = "#9ca3af";
  }
}

// Allow pressing Enter in the textarea to apply
document.getElementById("pg-classes").addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    applyPlayground();
  }
});
