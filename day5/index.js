const store = (function () {
  // data
   var prods = [
    { id: 1, name: "Laptop", price: 18500.5, category: "Electronics", quantity: 4 },
     { id: 2, name: "Mouse", price: 180, category: "Electronics", quantity: 25 },
     {id: 3, name: "Notebook", price: 35, category: "Stationery", quantity: 100},
    { id: 4, name: "Desk Lamp", price: 420, category: "Home", quantity: 0 }
  ]
  var idCounter = 5 // next id

  return {
    printProducts: function(list) {
         console.table(list)
    },

    getAllProducts: function() {
      return prods;
    },

    getProductById: function(id) {
       for(var i=0; i<prods.length; i++) {
          if(prods[i].id == id) {
              return prods[i]
          }
       }
       return null;
    },

    createProduct: function(name, price, cat, qty) {
        var n = name ? name.toString().trim() : "";
        var c = cat ? cat.toString().trim() : "";
        var p = parseFloat(price);
        var q = parseInt(qty);

        if(n == "") {
            return "Error: name is required.";
        }
        if(isNaN(p) || p <= 0) return "Error: price must be a number greater than 0.";
        if(isNaN(q) || q < 0) return "Error: quantity must be an integer >= 0.";

        // check duplicate
        var dup = false;
        for(var k=0; k<prods.length; k++) {
            if(prods[k].name.toLowerCase() == n.toLowerCase()) {
                dup = true;
            }
        }

        if(dup) {
            return "Error: Product name already exists.";
        }

        var newProd = {
            id: idCounter,
            name: n,
            price: p,
            category: c,
            quantity: q
        }
        idCounter = idCounter + 1; // increment
        prods.push(newProd);
        return newProd;
    },

    updateProduct: function(id, name, price, category, quantity) {
        var index = -1;
        prods.forEach((p, i) => {
            if(p.id == id) index = i;
        });

        if(index == -1) {
            return "Error: product not found.";
        }

        var p = prods[index];

        if(name) p.name = name.trim();
        if(category) p.category = category.trim();

        // update price if it exists
        if(price != null && price != "") {
            if(!isNaN(parseFloat(price)) && parseFloat(price) > 0) {
                p.price = parseFloat(price);
            }
        }
        if(quantity != null && quantity != "") {
             if(!isNaN(parseInt(quantity)) && parseInt(quantity) >= 0) {
                 p.quantity = parseInt(quantity);
             }
        }
        return p;
    },

    deleteProduct: function(id) {
        var idx = prods.findIndex(function(x) { return x.id == id })
        if(idx === -1) return "Error: product not found.";

        var conf = confirm("Are you sure you want to delete " + prods[idx].name + "?")
        if (conf == true) {
            var del = prods.splice(idx, 1);
            return del[0]
        } else {
            return "Error: Deletion cancelled by user."
        }
    },

    filterProducts: function(keyword) {
        var k = keyword ? keyword.toString().trim().toLowerCase() : "";
        var res = [];
        for(var i=0; i<prods.length; i++) {
            if(prods[i].name.toLowerCase().includes(k) || prods[i].category.toLowerCase().includes(k)) {
                res.push(prods[i])
            }
        }
        return res;
    },

    // bonus stuff below
    sortByPrice: function(order) {
       if(!order) order = "asc";
       // console.log("sorting...");
       return prods.toSorted((a, b) => {
           if(order == "desc") {
               return b.price - a.price;
           } else {
               return a.price - b.price;
           }
       });
    },

    getStoreStats: function() {
        var totalVal = 0;
        var outOfStock = 0;

        prods.forEach(p => {
            totalVal += (p.price * p.quantity);
            if(p.quantity == 0) {
                outOfStock += 1;
            }
        })

        var avg = 0;
        if(prods.length > 0) {
            avg = totalVal / prods.length;
        }

        return {
            totalProducts: prods.length,
            totalInventoryValue: Number(totalVal.toFixed(2)),
            averagePrice: Number(avg.toFixed(2)),
            outOfStockCount: outOfStock
        }
    },

    groupByCategory: function() {
        var groups = {};
        for(var i=0; i<prods.length; i++) {
            var cat = prods[i].category;
            if(groups[cat] == undefined) {
                groups[cat] = [];
            }
            groups[cat].push(prods[i]);
        }
        return groups;
    },

    filterByPriceRange: function(min, max) {
        if(min == undefined) min = 0;
        if(max == undefined) max = 999999999;
        return prods.filter(p => p.price >= min && p.price <= max)
    }
  }
})();

// HOF
function withAfterAction(fn, cb) {
   return function() {
       var args = Array.from(arguments);
       var r = fn.apply(this, args);
       cb(r);
       return r;
   }
}

var createAndLog = withAfterAction(store.createProduct.bind(store), function(res) {
    console.log("Action Finished: ", res);
})

function startApp() {
    var run = true
    while(run) {
        var menu = "===== NTI Mini Store =====\n1) Add product\n2) Show all products\n3) Show product by ID\n4) Update product\n5) Delete product\n6) Search / Filter\n7) View Store Stats (Bonus)\n0) Exit\n\nEnter your choice:";
        var c = prompt(menu);

        if(c == "0" || c == null) {
            console.log("Exited");
            run = false;
            break;
        }

        if(c == "1") {
            var name = prompt("Enter Product Name:");
            var p = prompt("Enter Price:");
            var cat = prompt("Enter Category:");
            var q = prompt("Enter Quantity:");
            console.log(store.createProduct(name, p, cat, q));
        } else if(c == "2") {
            console.log("All Products:");
            store.printProducts(store.getAllProducts());
        } else if(c == "3") {
            var id = prompt("Enter Product ID to find:");
            var f = store.getProductById(id);
            if(f) {
                console.log(f);
            } else {
                console.log("null")
            }
        } else if(c == "4") {
             var id = prompt("Enter Product ID to update:");
             var n = prompt("New Name (leave blank to keep current):");
             var p = prompt("New Price (leave blank to keep current):");
             var cat = prompt("New Category (leave blank to keep current):");
             var q = prompt("New Quantity (leave blank to keep current):");
             console.log(store.updateProduct(id, n, p, cat, q));
        } else if(c == "5") {
             var id = prompt("Enter Product ID to delete:");
             console.log(store.deleteProduct(id));
        } else if(c == "6") {
            var kw = prompt("Enter search keyword (Name or Category):");
            var filt = store.filterProducts(kw);
            console.log("Search results for " + kw + ":");
            store.printProducts(filt);
        } else if(c == "7") {
            console.log("Store Statistics:");
            console.log(store.getStoreStats());
        } else {
            alert("Invalid choice");
        }
    }
}
