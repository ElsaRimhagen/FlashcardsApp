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
    source: require("./motion/glide_x_y.png"),
    translation: "sprite.glide(0,0,1)", 
    category: "Rörelse",
  },
  {
    source: require("./motion/point_direction_90.png"),
    translation: "sprite.direction = 90",
    category: "Rörelse",
  },
  {
    source: require("./motion/point_mouse_pointer.png"),
    translation: "sprite.towards('mouse')",
    category: "Rörelse",
  },
  {
    source: require("./motion/change_x_10.png"),
    translation: "sprite.x = sprite.x + 10",
    category: "Rörelse",
  },
  {
    source: require("./motion/set_x_0.png"),
    translation: "sprite.x = 0",
    category: "Rörelse",
  },
  {
    source: require("./motion/change_y_10.png"),
    translation: "sprite.y = sprite.y + 10",
    category: "Rörelse",
  },
  {
    source: require("./motion/set_y_0.png"),
    translation: "sprite.y = 0",
    category: "Rörelse",
  },

];
