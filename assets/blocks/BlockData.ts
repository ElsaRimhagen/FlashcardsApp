export const BlockData = [
  {
    source: require("./motion/move_10.png"),
    translation: "sprite.forward(10)",
    category: "Rörelse",
  },

  {
    source: require("./motion/turn_right_15deg.png"),
    translation: "sprite.right(15)",
    category: "Rörelse",
  },

  {
    source: require("./motion/turn_left_15deg.png"),
    translation: "sprite.left(15)",
    category: "Rörelse",
  },

  {
    source: require("./motion/go_to_random.png"),
    translation: "sprite.goto('random')",
    category: "Rörelse",
  },

  {
    source: require("./motion/go_to_x_y.png"),
    translation: "sprite.goto(0, 0)",
    category: "Rörelse",
  },
  {
    source: require("./motion/go_to_x_y.png"),
    translation: "test",
    category: "Utseende",
  },
];

// "../assets/blocks/glide_x_y.png"

// "../assets/blocks/point_direction_90.png"

// "../assets/blocks/point_mouse_pointer.png"

// "../assets/blocks/change_x_10.png"

// "../assets/blocks/set_x_0.png"

// "../assets/blocks/change_y_10.png"

// "../assets/blocks/set_y_0.png"
