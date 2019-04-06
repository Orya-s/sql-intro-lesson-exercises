const SqlTestUtils = require('../sql_test_utils')

describe("exercise1", () => {
  

  it('Should insert data about the Deity Felurian. Her mythology is Faen, her power is Persuasion, she has no coolness level, and her creation date is 0', async (done) => {
    const testUtils = new SqlTestUtils(expect, jest, "Deity", "check_1")
    const isSelect = false

    await testUtils.createSQLConnection()
    await testUtils.tableSetup([`
        CREATE TABLE Deity(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50),
        mythology VARCHAR(20),
        main_power VARCHAR(50),
        coolness INT,
        creation_date INT
    )`])

    const studentQuery = await testUtils.getStudentQuery(expect)
    let result = await testUtils.getQueryResult(isSelect, studentQuery, expect, done)

    await testUtils.safeExpect(result[0].name, "Felurian")
    await testUtils.safeExpect(result[0].mythology, "Faen")
    await testUtils.safeExpect(result[0].main_power, "Persuasion")
    await testUtils.safeExpect(result[0].coolness, null)
    await testUtils.safeExpect(result[0].creation_date, 0)

    await testUtils.dropAndEndConnection()
    done() //for async
  });
})