const WordLength = require("./get_word_lengt.js");
    test("Get word lengths", function() {
      const words = ["sun", "potato", "roundabout", "pizza"];
      const expected = [3, 6, 10, 5];

      const output = WordLength(words);
      expect(output).toEqual(expected);
    });