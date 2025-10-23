// Supabase에서 categories 테이블의 code, name 컬럼만 조회
const supabase = require('../config/supabase');

async function getCategories() {
  // 테이블 이름이 'categories'인지 'category'인지 DB에 맞게 조정하세요.
  const { data, error } = await supabase
    .from('categories')
    .select('code, name');

  if (error) {
    throw error;
  }
  return data;
}

module.exports = {
  getCategories,
};