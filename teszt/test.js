QUnit.module('teszteles', function() {
    
    QUnit.test('létezik e', function(assert) {
      assert.ok(masodfokuEgyenletMegoldasa, "Létezik e masodfokuEgyenletMegoldasa? ");
    });
    QUnit.test('fuggveny e', function(assert) {
        assert.ok(typeof(masodfokuEgyenletMegoldasa) === "function", "Függvény e? ");
    });
    
    QUnit.test('teszteset1 /két megoldás', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(1, 4, 3), {X1: -1,X2: -3,});
    });
    QUnit.test('teszteset2 /ugyan az', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(1,2,1), {X1:-1,X2:-1,});
    });
    QUnit.test('teszteset3 /diszk. 0', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(2,1,2), 
        {
            X1:"A diszkrimináns kisebb mint nulla, a szám komplex!",
            X2:"A diszkrimináns kisebb mint nulla, a szám komplex!",
        });
    });
    QUnit.test('teszteset4 /0val oszva', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(0,1,2), 
        {
            X1:"0-val nem osztunk!",
            X2:"0-val nem osztunk!",
        });
    });
    QUnit.test('teszteset5 /0val osztva de szoveg', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa('0',1,2), 
        {
            X1:"0-val nem osztunk!",
            X2:"0-val nem osztunk!",
        });
    });
    QUnit.test('teszteset6 /b 0', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(16,0,-2), {
            X1: 0.3535533905932738,
            X2: -0.3535533905932738
          });
    });
    QUnit.test('teszteset7 /c 0', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(16,2,0), {
            X1: 0,
            X2: -0.125
          });
    });
    QUnit.test('teszteset8 /b c 0', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(16,0,0), {
            X1: 0,
            X2: 0
          });
    });
    QUnit.test('teszteset9 /tortek', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(2.3,5.5,1.1), {
            X1: -0.22029416199241053,
            X2: -2.1710101858336768
          });
    });
    QUnit.test('teszteset10 /soveg tortek .-tal', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa("2.3","5.5","1.1"), {
            X1: -0.22029416199241053,
            X2: -2.1710101858336768
          });
    });
    QUnit.test('teszteset11 /szoveg tortek ,-vel', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa("2,3","5,5","1,1"), {
            X1: -0.22029416199241053,
            X2: -2.1710101858336768
          });
    });
    QUnit.test('teszteset12 /a szoveg', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa("a",1,1), {
            X1: "a értéke nem szám!",
            X2: "a értéke nem szám!"
          });
    });
    QUnit.test('teszteset13 /b szoveg', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(1,"b",1), {
            X1: "b értéke nem szám!",
            X2: "b értéke nem szám!"
          });
    });
    QUnit.test('teszteset14 /c szoveg', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(1,1,"c"), {
            X1: "c értéke nem szám!",
            X2: "c értéke nem szám!"
          });
    });
    QUnit.test('teszteset15 /a nincs megadva', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa("",1,1), {
            X1: "a értéke nincs megadva!",
            X2: "a értéke nincs megadva!"
          });
    });
    QUnit.test('teszteset16 /b nincs megadva', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(1,"",1), {
            X1: "b értéke nincs megadva!",
            X2: "b értéke nincs megadva!"
          });
    });
    QUnit.test('teszteset17 /c nincs megadva', function(assert) {
        assert.deepEqual(masodfokuEgyenletMegoldasa(1,1,""), {
            X1: "c értéke nincs megadva!",
            X2: "c értéke nincs megadva!"
          });
    });
  });