function panggilRegexp(value) {
  let str =
    "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

  var data = str.match(/[cklCKL]/g);

  console.log(data);
}

panggilRegexp();
