// 身份证验证API测试脚本
const API_URL = 'https://api.byxy.vip/v1/idcard/';
const API_KEY = 'iD1H==cL-Eo8Y-YZpYr==ia9XVsV7oEp';

// 测试数据
const testData = {
  key: API_KEY,
  lastname: '张',
  firstname: '三',
  idcard: '110101199001011234' // 示例身份证号
};

async function testIdCardAPI() {
  console.log('=== 身份证验证API测试 ===\n');
  console.log('请求地址:', API_URL);
  console.log('请求数据:', JSON.stringify(testData, null, 2));
  console.log('\n尝试POST请求...\n');

  try {
    // 尝试POST方式
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    console.log('响应状态码:', response.status);
    
    const result = await response.json();
    console.log('\n响应数据:');
    console.log(JSON.stringify(result, null, 2));

    // 解析结果
    if (result.reason === '200') {
      console.log('\n✅ API请求成功');
      
      if (result.result) {
        const { code, realname, sex, age, birthday, address, res } = result.result;
        console.log('\n--- 验证结果 ---');
        console.log('状态码:', code);
        console.log('真实姓名:', realname);
        console.log('性别:', sex);
        console.log('年龄:', age);
        console.log('出生日期:', birthday);
        console.log('归属地:', address);
        console.log('匹配结果:', res === '1' ? '✅ 匹配' : '❌ 不匹配');
        
        // 根据状态码给出提示
        switch (code) {
          case '1001':
            console.log('\n✅ 查询成功');
            break;
          case '1002':
            console.log('\n⚠️ 非服务时间');
            break;
          case '1003':
            console.log('\n❌ 缺少参数');
            break;
          case '1004':
            console.log('\n❌ 格式有误');
            break;
          case '1005':
            console.log('\n❌ 密钥调用令牌上限');
            break;
          default:
            console.log('\n⚠️ 未知状态码');
        }
      }
    } else {
      console.log('\n❌ API请求失败');
    }

  } catch (error) {
    console.error('\n❌ 请求出错:', error.message);
    if (error.cause) {
      console.error('错误详情:', error.cause);
    }
  }
}

// 尝试GET请求方式
async function testIdCardAPIWithGET() {
  console.log('\n\n=== 尝试GET请求方式 ===\n');
  
  const params = new URLSearchParams(testData);
  const getUrl = `${API_URL}?${params.toString()}`;
  
  console.log('请求URL:', getUrl);
  
  try {
    const response = await fetch(getUrl, {
      method: 'GET',
    });

    console.log('响应状态码:', response.status);
    const result = await response.json();
    console.log('\n响应数据:');
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('\n❌ 请求出错:', error.message);
  }
}

// 尝试使用表单格式
async function testIdCardAPIWithForm() {
  console.log('\n\n=== 尝试表单格式 ===\n');
  
  const formData = new URLSearchParams(testData);
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    });

    console.log('响应状态码:', response.status);
    const result = await response.json();
    console.log('\n响应数据:');
    console.log(JSON.stringify(result, null, 2));
    
    if (result.reason === '200' && result.result) {
      const { code, realname, sex, age, birthday, address, res } = result.result;
      console.log('\n--- 验证结果 ---');
      console.log('状态码:', code);
      console.log('真实姓名:', realname);
      console.log('性别:', sex);
      console.log('年龄:', age);
      console.log('出生日期:', birthday);
      console.log('归属地:', address);
      console.log('匹配结果:', res === 1 || res === '1' ? '✅ 匹配' : '❌ 不匹配');
    }
  } catch (error) {
    console.error('\n❌ 请求出错:', error.message);
  }
}

// 执行所有测试
(async () => {
  await testIdCardAPI();
  await testIdCardAPIWithGET();
  await testIdCardAPIWithForm();
})();
