const find_needle = require("./find_needles.js");
    test("Find the needle", function() {
      const words = ["house", "train", "slide", "needle", "book"];
      const expected = 3;
      const output = find_needle(words, "needle");
      expect(output).toEqual(expected);
    });