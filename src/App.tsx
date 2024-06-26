import { useState, useEffect } from "react";
import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
  DocumentDuplicateIcon,
  PencilIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import { DropdownMenu, Table } from "@radix-ui/themes";
import data from "./database/bancoDeDados.json";
import {
  ArchiveIcon,
  BarChartIcon,
  CalendarIcon,
  DashboardIcon,
  NotionLogoIcon,
  PieChartIcon,
  TrashIcon,
} from "@radix-ui/react-icons";

function App() {
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    const total = data.reduce((acc, order) => acc + order.valorTotal, 0);
    setTotalOrders(total);
  }, []);

  const [totalOrdersUnit, setTotalOrdersUnit] = useState(0);

  useEffect(() => {
    const calculateTotalOrdersUnit = () => {
      setTotalOrdersUnit(data.length);
    };

    calculateTotalOrdersUnit();
  }, [data]);

  return (
    <div className="mx-auto flex flex-col items-center lg:items-start lg:flex-row max-w-6xl px-5">
      <div className="bg-darkBlue w-36 lg:w-20 rounded-2xl mt-10 flex flex-col lg:h-[500px] items-center justify-start space-y-10 shadow-2xl p-6">
        <h1 className="text-white">Menu</h1>
        <div>
          <button className="p-2 rounded-full hover:bg-gray-700 transition duration-200">
            <DashboardIcon className="h-8 w-8 text-white hover:text-white" />
          </button>
        </div>
        <div>
          <button className="p-2 rounded-full hover:bg-gray-700 transition duration-200">
            <BarChartIcon className="h-8 w-8 text-white hover:text-white" />
          </button>
        </div>

        <div>
          <button className="p-2 rounded-full hover:bg-gray-700 transition duration-200">
            <PieChartIcon className="h-8 w-8 text-white hover:text-white" />
          </button>
        </div>
        <div>
          <button className="p-2 rounded-full hover:bg-gray-700 transition duration-200">
            <CalendarIcon className="h-8 w-8 text-white hover:text-white" />
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full lg:mx-0 mx-4 lg:p-10 items-center justify-center">
        <div className="w-full flex flex-col ">
          <h1 className="text-3xl font-semibold text-center">
            Venha conferir as novidades!
          </h1>
          <div className="mt-4 grid w-full sm:grid-cols-2 gap-4">
            <div className="flex items-center lg:justify-normal justify-center p-2 bg-white rounded-3xl shadow-2xl">
              <CurrencyDollarIcon className="h-8 w-8 text-darkBlue mr-2" />
              <div>
                <p className="text-2xl font-bold  text-darkBlue">
                  R${totalOrders.toFixed(2)}
                </p>
                <h2 className="text-base text-darkBlue">Total de vendas</h2>
              </div>
            </div>

            <div className="flex items-center lg:justify-normal justify-center  p-2 bg-white rounded-3xl shadow-2xl">
              <ShoppingCartIcon className="h-8 w-8 text-darkBlue mr-2" />
              <div>
                <p className="text-2xl font-bold text-darkBlue">
                  {totalOrdersUnit}
                </p>
                <h2 className="text-base text-darkBlue">
                  Total de pedidos (unidades)
                </h2>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-[350px]  lg:max-w-3xl my-12 space-y-6 px-5">
            <div className="bg-white rounded-3xl shadow-2xl p-6">
              <h1 className="text-3xl flex p-4 justify-start items-start font-semibold text-center">
                Dados
              </h1>
              <Table.Root variant="surface" className="w-full">
                <Table.Header className="bg-lightGrayishBlue">
                  <Table.Row>
                    <Table.ColumnHeaderCell className="text-darkBlue font-bold p-3">
                      Produto
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="text-darkBlue font-bold p-3">
                      Valor
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="text-darkBlue font-bold p-3">
                      E-mail
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell className="text-darkBlue font-bold p-3">
                      Status de processamento
                    </Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {data.map((pedido) => (
                    <Table.Row
                      key={pedido.id}
                      className="bg-white even:bg-lightGrayishBlue"
                    >
                      <Table.RowHeaderCell className="text-darkBlue p-3">
                        {pedido.produtos
                          .map((produto) => produto.nome)
                          .join(", ")}
                      </Table.RowHeaderCell>
                      <Table.Cell className="text-darkBlue p-3">
                        R$ {pedido.valorTotal.toFixed(2)}
                      </Table.Cell>
                      <Table.Cell className="text-darkBlue p-3">
                        {pedido.cliente.email}
                      </Table.Cell>
                      <Table.Cell className="text-darkBlue p-3">
                        {pedido.status}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-darkBlue w-full  lg:w-auto rounded-3xl mt-10 justify-center flex lg:order-none order-first lg:h-[50px] p-4 items-center space-x-4">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <button className="p-2 rounded-full hover:bg-lightGrayishBlue transition duration-200">
              <PencilIcon className="h-6 w-6 text-white" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="bg-darkBlue text-white rounded-lg shadow-lg">
            <DropdownMenu.Item className="flex items-center space-x-2 p-2 hover:bg-lightGrayishBlue transition duration-200">
              <DocumentDuplicateIcon className="h-4 w-4" />
              <span>Duplicate</span>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="h-px bg-white" />
            <DropdownMenu.Item className="flex items-center space-x-2 p-2 hover:bg-lightGrayishBlue transition duration-200">
              <ArchiveIcon className="h-4 w-4" />
              <span>Archive</span>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="h-px bg-white" />
            <DropdownMenu.Item className="flex items-center space-x-2 p-2 hover:bg-lightGrayishBlue transition duration-200 text-red-400">
              <TrashIcon className="h-4 w-4" />
              <span>Delete</span>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
        <div className="text-white">
          <NotionLogoIcon className="h-6 w-6 text-white" />
        </div>
        <div className="text-white">
          <UserCircleIcon className="h-6 w-6 text-white" />
        </div>
        <div className="text-white">
          <CalendarDaysIcon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
}

export default App;
