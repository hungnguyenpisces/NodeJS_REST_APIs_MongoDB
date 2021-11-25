const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');
const customers = require('../services/customers.js');

//Customer
router.get('/', auth(['President', 'Manager', 'Leader', 'Staff']), customers.getAllCustomers);

router.get('/:customerNumber', auth(['President', 'Manager', 'Leader', 'Staff']), customers.getCustomerByNumber);

router.post('/', auth(['President', 'Manager', 'Leader', 'Staff']), customers.createCustomer);

router.put('/', auth(['President', 'Manager', 'Leader']), customers.updateCustomer);

router.patch('/', auth(['President', 'Manager', 'Leader']), customers.updatePartialCustomer);

router.delete('/:customerNumber', auth(['President', 'Manager', 'Leader']), customers.deleteCustomer);

module.exports = router;
