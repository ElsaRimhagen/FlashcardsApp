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

  {
    source: require("./looks/sayhello2sec.png"),
    translation: "sprite.say('Hello!', 2)",
    category: "Utseende",
  },
  {
    source: require("./looks/sayhello.png"),
    translation: "sprite.say('Hello!')",
    category: "Utseende",
  },
  {
    source: require("./looks/thinkhmm2sec.png"),
    translation: "sprite.think('Hmm', 2)",
    category: "Utseende",
  },
  {
    source: require("./looks/switchcostumetocostume2.png"),
    translation: "sprite.set_costume('costume2')",
    category: "Utseende",
  },
  {
    source: require("./looks/nextcostume.png"),
    translation: "sprite.next_costume()",
    category: "Utseende",
  },
  {
    source: require("./sound/play_meow_done.png"),
    translation: "sprite.play_until_done('Meow')",
    category: "Ljud",
  },
  {
    source: require("./sound/start_meow.png"),
    translation: "sprite.play('Meow')",
    category: "Ljud",
  },
  {
    source: require("./sound/stop_all_sounds.png"),
    translation: "sprite.stop_sound()",
    category: "Ljud",
  },
  {
    source: require("./sound/change_pitch_by_10.png"),
    translation: "sprite.set_soundeffect('PITCH', 10)",
    category: "Ljud",
  },
  {
    source: require("./variables/set_variable_0.png"),
    translation: "sprite.set_variable('my variable', 0)",
    category: "Variabler",
  },
  {
    source: require("./variables/change_variable_1.png"),
    translation: "sprite.change_variable('my variable', 1)",
    category: "Variabler",
  },
  {
    source: require("./variables/show_variable.png"),
    translation: "sprite.show_variable('my variable')",
    category: "Variabler",
  },
  {
    source: require("./variables/hide_variable.png"),
    translation: "sprite.hide_variable('my variable')",
    category: "Variabler",
  },
];
