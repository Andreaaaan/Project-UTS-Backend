const paymentsService = require('./payments-service');

// 1. POST (Tambah Data)
async function createPayment(req, res) {
  try {
    const result = await paymentsService.createPayment(req.body);
    res
      .status(201)
      .json({ success: true, message: 'Payment Created', data: result });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
}

// 2. GET ALL (Ambil Semua)
async function getPayments(req, res) {
  try {
    const result = await paymentsService.getPayments();
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}

// 3. GET DETAIL (Ambil 1 Data)
async function getPayment(req, res) {
  try {
    const result = await paymentsService.getPayment(req.params.id);
    if (!result)
      return res
        .status(404)
        .json({ success: false, message: 'Data tidak ditemukan' });
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}

// 4. UPDATE (Update Data)
async function updatePayment(req, res) {
  try {
    const result = await paymentsService.updatePayment(req.params.id, req.body);
    res
      .status(200)
      .json({ success: true, message: 'Payment Updated', data: result });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
}

// 5. DELETE (Hapus Data)
async function deletePayment(req, res) {
  try {
    await paymentsService.deletePayment(req.params.id);
    res.status(200).json({ success: true, message: 'Payment Deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = {
  createPayment,
  getPayments,
  getPayment,
  updatePayment,
  deletePayment,
};
